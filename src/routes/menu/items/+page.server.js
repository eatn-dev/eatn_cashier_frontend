import { error } from "@sveltejs/kit"
import { GATEWAY_URL } from "$env/static/private"
import { loadFlashMessage } from "sveltekit-flash-message/server"

/** @type {import("./$types").PageLoad} */
export const load = loadFlashMessage( async ({ fetch }) => {
    const url = `${GATEWAY_URL}/items`
    const options = {
        method: "GET"
    }

    const response = await fetch(url, options)

    const body = await response.json()

    if(!response.ok){
        throw error(response.status)
    }

    return body 
})