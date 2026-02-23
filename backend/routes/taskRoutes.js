const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// READ ALL
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// READ ONE  ← THIS WAS MISSING
router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;