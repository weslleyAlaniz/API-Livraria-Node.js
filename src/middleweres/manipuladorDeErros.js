function manipuladorDeErros(erro, req, res, next){
        if (erro instanceof mongoose.Error.CastError) {
          res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos"})
        } else if (erro instanceof mongoose.Error.ValidationError){
          res.status(400).send({messege: "Erro de validação de dados"})
        }
        else {
          res.status(500).send({message: `${erro.message} - Id do Autor não localizado.`});
        }
      }

      export default manipuladorDeErros;