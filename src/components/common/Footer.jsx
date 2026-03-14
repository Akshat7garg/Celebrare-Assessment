import React from "react";

function Footer() {
    return (
        <footer
            className="w-full py-4 mt-12 text-center text-sm border-t border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400"
        >
            © 2026{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">
                Pixora
            </span>{" "}
            • Built with React & Tailwind
        </footer>
    );
}

export default Footer;