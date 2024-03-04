'use server'

import axios from "axios";

const URL = "/api/quote-generator";

export async function getQuote() {
    const res = await axios.get(URL)

    console.log(res.data[0])

    return res.data[0];
}