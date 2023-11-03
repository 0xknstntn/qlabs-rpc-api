export default async function handler(req, res) {
        if (req.method === 'GET') {
                var url = "";
                if ((req.query.keywords).length != 0) {
                        for (let index = 0; index < (req.query.keywords).length; index++) {
                                url += "/" + req.query.keywords[index]
                        }
                }
                
                var data = await fetch("http://89.108.83.252:26657" + url, {
                        mode: 'cors',
                });


                var dataJson = await data.json()
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(dataJson);
        } 

        if (req.method === 'POST') {

                const body = JSON.parse(req.body)

                var data = await fetch("http://89.108.83.252:26657", {
                        method: 'POST',
                        headers: {
                                'Access-Control-Allow-Origin': '*',
                                'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(body),
                });

                var dataJson = await data.json()
                res.headers.append('Access-Control-Allow-Credentials', "true")
                res.headers.append('Access-Control-Allow-Origin', '*')
                res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
                res.headers.append(
                        'Access-Control-Allow-Headers',
                        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
                )
                res.status(200).json(dataJson);
        }
}