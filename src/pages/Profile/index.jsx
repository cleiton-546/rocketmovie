import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi';

import { Back } from '../../components/back';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form, Avatar,  } from './styles';

export function Profile() {
    return (
        <Container>
            <header>
                <Back title="Voltar"/>
            </header>

            <Form>
                <Avatar>
                    <img 
                      src="https://github.com/cleiton-546.png" 
                      alt="Foto do usuário" 
                    />
                    <label htmlFor='avatar'>
                        <FiCamera />
                        
                        <input 
                          id='avatar'
                          type='file'
                        />
                    </label>
                </Avatar> 
                <Input 
                  placeholder="Nome"
                  type="text"
                  icon={FiUser}
                />
                <Input 
                  className="content"
                  placeholder="Email"
                  type="text"
                  icon={FiMail}
                />
                <Input 
                  placeholder="Senha atual"
                  type="password"
                  icon={FiLock}
                />
                <Input 
                  placeholder="Nova senha"
                  type="password"
                  icon={FiLock}
                />
                <Button className="saveButton" title="Salvar" />
            </Form>
        </Container>
    )
}