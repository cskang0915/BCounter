const budgetEntryRouter = require("express").Router();
const database = require("../database");
const authRequired = require("../middleware/authRequired");

budgetEntryRouter.post("/new", authRequired, (req, res) => {
	const createNewBudgetEntry = `INSERT INTO budget_entry VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

	database.run(createNewBudgetEntry, 
		[
			req.userId,
			req.body.amount,
			req.body.category,
			req.body.dayOfEntry,
			req.body.weekOfEntry,
			req.body.monthOfEntry,
			req.body.yearOfEntry,
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
	JOIN category ON category.rowid = budget_entry.category
	WHERE budget_entry.userId = ${req.userId}`;

	database.all(getAllBudgetEntry, (err, budgetEntry) => {
		console.log(err)
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

budgetEntryRouter.put("/update/:rowid", authRequired, (req, res) => {
	const updateBudgetEntryByRowid = `
	UPDATE budget_entry SET userId = ?, amount = ?, category = ?, dayOfEntry = ?, weekOfEntry = ?, monthOfEntry = ?, yearOfEntry = ?, comment = ?
	WHERE budget_entry.userId = ${req.userId}
	AND budget_entry.rowid = ${req.params.rowid}`;

	database.run(updateBudgetEntryByMonthDate,
		[
			req.userId,
			req.body.amount,
			req.body.category,
			req.body.dayOfEntry,
			req.body.weekOfEntry,
			req.body.monthOfEntry,
			req.body.yearOfEntry,
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

budgetEntryRouter.delete("/delete/:rowid", authRequired, (req, res) => {
	const deleteBudgetEntryByRowid = `DELETE FROM budget_entry
	WHERE budget_entry.userId = ${req.userId}
	AND budget_entry.rowid = ${req.params.rowid}`;

	database.run(deleteBudgetEntryByRowid, (err) => {
		if(err) {
			return res.status(500).json({
				status: 500,
				message: "something went wrong. try again"
			});
		} else {
			return res.status(200).json({
				status: 200,
				message: "successfully deleted entry by rowid"
			});
		};
	});
});

// ------------------------------------------- //
// WHAT ABOUT WHEN WE ALREADY DELETE THE ROWID //
// ------------------------------------------- //

module.exports = budgetEntryRouter;