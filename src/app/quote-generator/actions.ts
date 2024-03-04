'use server'

import axios from "axios";

const URL = "http://localhost:3000/api/quote-generator";

export async function getQuote() {
    const res = await axios.get(URL)

    console.log(res.data[0])

    return res.data[0];
}