const http = require('http')
const meta = require('./aux')
const axios = require('axios')
const html = require('./htmlFuncs')
const fs = require('fs')

http.createServer(async (req, res) => {
    var d = new Date().toISOString().substring(0,16);
    switch(req.method){
        case 'GET':
            if(req.url === '/cidades'){
                axios.get('http://localhost:3000/cidades?_sort=nome')
                    .then(resp => {
                        var cidades = resp.data
                        res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                        res.write(html.genCidades(cidades, d))
                        res.end()
                    })
                    .catch(err => {
                        console.log(err)
                        res.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                        res.end()
                    })
            }else if(req.url.match(/\/cidades\/.+/)){
                var id = req.url.split("/")[2]
                var cidade = (await axios.get('http://localhost:3000/cidades/' + id)).data
                var ligacoes = (await axios.get(`http://localhost:3000/ligacoes?origem=${id}&_sort=distância`)).data
                var cidades = (await axios.get(`http://localhost:3000/cidades`)).data
                var mapCidades = new Map()
                
                cidades.forEach(cidadeaux => {
                    mapCidades.set(cidadeaux.id, cidadeaux.nome)
                })
                

                res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                res.write(html.genCidade(cidade, ligacoes, mapCidades, d))
                res.end()
                    
            }else if(req.url.match(/w3\.css$/)){
                fs.readFile("w3.css", function(erro, dados){
                    if(erro){
                        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
                        res.end('<p>Erro na leitura do ficheiro: ' + erro + '</p>')
                    }
                    else{
                        res.writeHead(200, {'Content-Type': 'text/css'})
                        res.end(dados)
                    }
                })
            }else{
                res.writeHead(404, {'Content-Type' : 'text/html;charset=utf-8'})
                res.end()
            }
            break;
        default:
            res.writeHead(405, {'Content-Type' : 'text/html;charset=utf-8'})
            res.end()
            break;
    }
}).listen(4321)

console.log("Server listen in port 4321...")