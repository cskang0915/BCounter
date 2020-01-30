const budgetEntryRouter = require("express").Router();
const database = require("../database");
const authRequired = require("../middleware/authRequired");

budgetEntryRouter.post("/new", authRequired, (req, res) => {
	const createNewBudgetEntry = `INSERT INTO budget_entry VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

	database.run(createNewBudgetEntry, 
		[
			req.userId,
			req.body.amount,
			req.body.isNeeds,
			req.body.isWants,
			req.body.isSavings,
			req.body.dateOfEntry,
			req.body.monthOfEntry,
			req.body.comment
		], (err) => {
			if(err) {
				console.log(err)
				return res.status(500).json({
					status: 500,
					message: "something went wrong. try again"
				});
			} else {
				return res.status(200).json({
					status: 200,
					message: "created a new entry."
				});
			};
		});
});

budgetEntryRouter.get("/get/all", authRequired, (req, res) => {
	const getAllBudgetEntry = `
	SELECT *, budget_entry.rowid from budget_entry
	WHERE budget_entry.userId = ${req.userId}`;

	database.all(getAllBudgetEntry, (err, budgetEntry) => {
		if(err) {
			return res.status(500).json({
				status: 500,
				message: "something went wrong. try again"
			});
		} else {
			return res.status(200).json(budgetEntry)
		};
	});
});

// --------------------------------------- //
// WE NEED A GET ALL ENTRY BY CURRENT WEEK //
// --------------------------------------- //

budgetEntryRouter.get("/get/:month", authRequired, (req, res) => {
	const getAllBudgetEntryByMonth = `
	SELECT *, budget_entry.rowid from budget_entry
	WHERE budget_entry.userId = ${req.userId}
	AND budget_entry.monthOfEntry = ${req.params.month}`;

	database.all(getAllBudgetEntryByMonth, (err, budgetEntry) => {
		if(err) {
			return res.status(500).json({
				status: 500,
				message: "something went wrong. try again"
			});
		} else if(budgetEntry.length === 0) {
			return res.status(200).json('no entries on this date');
		} else {
			return res.status(200).json(budgetEntry)
		};
	});
});

budgetEntryRouter.put("/update/:needs/:wants/:savings/:month/:date", authRequired, (req, res) => {
	const updateBudgetEntryByMonthDate = `
	UPDATE budget_entry SET userId = ?, amount = ?, isNeeds = ?, isWants = ?, isSavings = ?, dateOfEntry = ?, monthOfEntry = ?, comment = ?
	WHERE budget_entry.userId = ${req.userId}
	AND budget_entry.isNeeds = ${req.params.needs}
	AND budget_entry.isWants = ${req.params.wants}
	AND budget_entry.isSavings = ${req.params.savings}
	AND budget_entry.dateOfEntry = ${req.params.date}
	AND budget_entry.monthOfEntry = ${req.params.month}`;

	database.run(updateBudgetEntryByMonthDate,
		[
			req.userId,
			req.body.amount,
			req.body.isNeeds,
			req.body.isWants,
			req.body.isSavings,
			req.body.dateOfEntry,
			req.body.monthOfEntry,
			req.body.comment
		], (err) => {
			if(err) {
				console.log(err)
				return res.status(500).json({
					status: 500,
					message: "something went wrong. try again"
				});
			} else {
				return res.status(200).json({
					status: 200,
					message: "successfully updated budget_entry by month and date"
				});
			};
		});
});


module.exports = budgetEntryRouter;