const budgetEntryRouter = require("express").Router();
const database = require("../database");
const authRequired = require("../middleware/authRequired");

// post request
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

// get all - entries
budgetEntryRouter.get("/all", authRequired, (req, res) => {
	const getAllBudgetEntry = `
	SELECT *, budget_entry.rowid from budget_entry
	JOIN category ON category.rowid = budget_entry.category
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

// get by rowid
budgetEntryRouter.get("/get/:id", authRequired, (req, res) => {
	const getAllBudgetEntry = `
	SELECT *, budget_entry.rowid from budget_entry
	WHERE budget_entry.userId = ${req.userId}
	AND budget_entry.rowid = ${req.params.id}`;

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

// get all by specific month, day, year
budgetEntryRouter.get("/get/day/:month/:day/:year", authRequired, (req, res) => {
	const getAllBudgetEntryByDay = `
	SELECT *, budget_entry.rowid FROM budget_entry
	JOIN category ON category.rowid = budget_entry.category
	WHERE budget_entry.userId = ${req.userId}
	AND budget_entry.monthOfEntry = ${req.params.month}
	AND budget_entry.dayOfEntry = ${req.params.day}
	AND budget_entry.yearOfEntry = ${req.params.year}`;

	database.all(getAllBudgetEntryByDay, (err, budgetEntry) => {
		if(err) {
			return res.status(500).json({
				status: 500,
				message: "something went wrong. try again"
			});
		} else if(budgetEntry.length === 0) {
			return res.status(200).json('no entries on this day')
		} else {
			return res.status(200).json(budgetEntry)
		};
	});
});

// get all by week, year
budgetEntryRouter.get("/get/week/:week/:year", authRequired, (req, res) => {
	const getAllBudgetEntryByWeek = `
	SELECT *, budget_entry.rowid FROM budget_entry
	JOIN category ON category.rowid = budget_entry.category
	WHERE budget_entry.userId = ${req.userId}
	AND budget_entry.weekOfEntry = ${req.params.week}
	AND budget_entry.yearOfEntry = ${req.params.year}`;

	database.all(getAllBudgetEntryByWeek, (err, budgetEntry) => {
		if(err) {
			return res.status(500).json({
				status: 500,
				message: "something went wrong. try again"
			});
		} else if (budgetEntry.length === 0) {
			return res.status(200).json('no entries on this week');
		} else {
			return res.status(200).json(budgetEntry)
		};
	});
});

// get all by month, year
budgetEntryRouter.get("/get/month/:month/:year", authRequired, (req, res) => {
	const getAllBudgetEntryByMonth = `
	SELECT *, budget_entry.rowid FROM budget_entry
	JOIN category ON category.rowid = budget_entry.category
	WHERE budget_entry.userId = ${req.userId}
	AND budget_entry.monthOfEntry = ${req.params.month}
	AND budget_entry.yearOfEntry = ${req.params.year}`;

	database.all(getAllBudgetEntryByMonth, (err, budgetEntry) => {
		if(err) {
			return res.status(500).json({
				status: 500,
				message: "something went wrong. try again"
			});
		} else if(budgetEntry.length === 0) {
			return res.status(200).json('no entries on this month');
		} else {
			return res.status(200).json(budgetEntry)
		};
	});
});

// put request
budgetEntryRouter.put("/update/:rowid", authRequired, (req, res) => {
	const updateBudgetEntryByRowid = `
	UPDATE budget_entry SET userId = ?, amount = ?, category = ?, dayOfEntry = ?, weekOfEntry = ?, monthOfEntry = ?, yearOfEntry = ?, comment = ?
	WHERE budget_entry.userId = ${req.userId}
	AND budget_entry.rowid = ${req.params.rowid}`;

	database.run(updateBudgetEntryByRowid,
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

// delete request
budgetEntryRouter.delete("/delete/:rowid", authRequired, (req, res) => {
	const selectBudgetEntryByRowid = `
	SELECT * FROM budget_entry
	WHERE budget_entry.userId = ${req.userId}
	AND budget_entry.rowid = ${req.params.rowid}`;

	database.all(selectBudgetEntryByRowid, (err, checkedUser) => {
		if(err) {
			console.log(err)
			return res.status(500).json({
				status: 500,
				message: "something went wrong. try again1"
			});
		} else if(checkedUser.length === 0) {
			return res.status(200).json('there are no entries to delete');
		} else {
			const deleteBudgetEntryByRowid = `DELETE FROM budget_entry
			WHERE budget_entry.userId = ${req.userId}
			AND budget_entry.rowid = ${req.params.rowid}`;

			database.run(deleteBudgetEntryByRowid, (err) => {
				if(err) {
					return res.status(500).json({
						status: 500,
						message: "something went wrong. try again2"
					});
				} else {
					return res.status(200).json({
						status: 200,
						message: "successfully deleted entry by rowid"
					});
				};
			});
		};
	});
});

// ------------------------------ CATEGORIES ROUTES ------------------------------
// get all
budgetEntryRouter.get("/get/category/all", authRequired, (req, res) => {
	const getAllCategories = `
	SELECT *, category.rowid from category`;
	database.all(getAllCategories, (err, category) => {
		if(err) {
			return res.status(500).json({
				status: 500,
				message: "something went wrong. try again"
			});
		} else {
			return res.status(200).json(category)
		};
	});
});

module.exports = budgetEntryRouter;