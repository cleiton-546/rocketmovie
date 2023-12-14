import { Input } from '../Input'
import { Container, Profile, Search  } from './styles'

export function Header() {
    return (
        <Container>

            <h1>RocketMovies</h1>

            <Search> 
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <Profile>
                <div>  
                    <strong>Cleiton Silva</strong>
                    <span><button>sair</button></span>
                </div> 

                <img 
                src="https://github.com/cleiton-546.png" 
                alt="Foto do usuário" />
              
            </Profile>

        </Container>
    );
}