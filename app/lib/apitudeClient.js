import axios from "axios"
import crypto from "crypto"

const apiKey = "demo"
const apiSecret = "demo"

export default {
	"hotelAvail": function() {
		// sha256Hex(apiKey + sharedSecret + System.currentTimeMillis() / 1000)
		const signature = apiKey + apiSecret + Math.round(new Date().getTime() / 1000)
		const hash = crypto.createHash('sha256').update(signature).digest('hex')

		console.log(signature, hash)

        return axios.post("https://api.test.hotelbeds.com/hotel-api/1.0/hotels", {
            "stay": {
                "checkIn": "2016-09-08",
                "checkOut": "2016-09-10",
                "shiftDays": "2"
            },
            "occupancies": [
                {
                    "rooms": 1,
                    "adults": 2,
                    "children": 2,
                    "paxes": [
                        {
                            "type": "AD",
                            "age": 30
                        },
                        {
                            "type": "AD",
                            "age": 30
                        },
                        {
                            "type": "CH",
                            "age": 8
                        },
                        {
                            "type": "CH",
                            "age": 8
                        }
                    ]
                },
                {
                    "rooms": 1,
                    "adults": 1,
                    "children": 1,
                    "paxes": [
                        {
                            "type": "AD",
                            "age": 30
                        },
                        {
                            "type": "CH",
                            "age": 8
                        }
                    ]
                }
            ],
            "destination": {
                "code": "PMI",
                "zone": "90"
            }
        }, 
        {
	        "headers": {
	            "Api-Key": apiKey,
	            "X-Signature": hash,
	            "Accept": "application/json"
	        }
        }
        )
    }
}
