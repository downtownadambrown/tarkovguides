import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

export default function Footer() {
    return (
        <footer className="appFooter">
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                TarkovGuides.com - Copyright &copy; 2019
            </Typography>
        </footer>
    );
}
