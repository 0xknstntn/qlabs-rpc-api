export async function GET(req, res) {
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
export async function POST(req, res) {
        const body = JSON.parse(req.body)
        var data = await fetch("http://89.108.83.252:26657", {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
                mode: 'cors',
        });

        var dataJson = await data.json()
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dataJson);
}