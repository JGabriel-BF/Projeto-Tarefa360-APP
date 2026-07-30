import { HTTPClient } from "./client";

const UsuarioAPI = {
    async obterAsync(usuarioId) {
        try {
            const response = await HTTPClient.get(`/Usuario/Obter/${usuarioId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao obter usuário:", error);
            throw error;
        }
    },

    async ListarAsync (ativos) {
        try {
            const response = await HTTPClient.get(`/Usuario/Listar?ativos=${ativos}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao listar usuários: ", error);
            throw error;
        }

    },

    async CriarAsync (nome, email, senha){
        try {
            const usuarioCriar = {
                Nome: nome,
                Email: email,
                Senha: senha
            };
             const response = await HTTPClient.post(`/Usuario/Criar`, usuarioCriar);
             return response.data
        } catch (error) {
            console.log("Erro ao criar usuário:", error);
            throw error;
        }
    },
     async AtualizarAsync (id, nome, email) {
        try {
            const usuarioAtualizar = {
                Id = id,
                Nome = nome,
                Email = email
            };
            const response = await HTTPClient.put(`/Usuario/Atualizar`, usuarioAtualizar);
            return response.data;
        }   catch (error) {
            console.error("Erro ao atualizar usuário: ", error);
            throw error;
        }
     },
     async DeletarAsync (usuarioId) {
        try {
            const response = await HTTPClient.delete(`/Usuario/Deletar/${usuarioId}`);
            return response.data;
        } catch (error) {
            console.error;
            throw error;
        }
     },
    
     async ListarTiposUsuarioAsync () {
        try {
            const response = await HTTPClient.get(`/Usuario/ListarTiposUsuario`);
            return response.data;
        } catch (error) {
            console.error ("Erro ao listar tipos de usuário", error)
            throw error;
        }
     },

     async AlterarSenhaAsync (id, senha, senhaAntiga) {
        try {
            const usuarioAlterarSenha = {
                Id: id,
                Senha: senha,
                SenhaAntiga: senhaAntiga
            };
            const response = await HTTPClient.put (`/Usuario/AlterarSenha`, usuarioAlterarSenha);
            return response.data;
        }   catch (error) {
            console.error("Erro ao alterar senha do usuário:", error);
            throw error;
        }
     },

     async restaurarAsync (usuarioId) {
        try {
            const response = await HTTPClient.put(`/Usuario/Restaurar/${usuarioId}`);
            return response.data;
        }   catch (error) {
            console.error("Erro ao restaurar usuário:", error);
            throw error;
        }
     }
}

