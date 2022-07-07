import React, { useEffect, useState } from 'react';

export default function About() {

    useEffect(() => {
        window.location.href = "https://divyateja04.github.io";
    }, []);

    return (
        <div>You are being redirected to an external website</div>
    )
}
