import React from "react";
import { Link } from "react-router-dom";

function Footer(): React.ReactElement {
    return (
        <div className="flex items-center justify-between p-12">
            <div className="flex items-center gap-2">
                <p className="text-text-tertiary text-sm leading-5">Powered By</p>
                <img src="/images/micah-logo-dark.svg" className="w-30" alt="Micah Logo Dark"/>
            </div>
            <Link to="/"><h2 className="text-2xl font-bold text-text-primary">The War Index</h2></Link>
        </div>
    )
}

export default Footer
