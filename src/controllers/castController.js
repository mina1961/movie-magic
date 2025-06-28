import { Router } from "express";
import castServices from "../services/castServices.js";

const router = Router();

router.get("/create", (req, res) => {
    res.render('cast/create')
});

router.post("/create", async (req, res) => {
    const cast = req.body;
    // Here you would typically save the cast to a database

    await castServices.create(cast)
 
    res.redirect('/');
    
})

export default router;