
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Back } from "../../components/back";



import { Container, Form } from "./styles";

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Back title="Voltar"/>
                    </header>

                    <div className="inputs">
                        <Input placeholder="Título" />
                        <Input placeholder='Sua nota (de 0 a 5)' /> 
                    </div>
                   
                    <Textarea placeholder="Observações" />
                          
                    <Section>
                        <h2>Marcadores</h2>
                        <div className="tags"> 
                            <NoteItem value="React" />
                            <NoteItem isNew placeholder="Nova Marcador" />
                        </div>
                                         
                    </Section>

                    <div className="edit">
                        <Button className="delete" title="Excluir filme"/>
                        <Button className="save"  title="Salvar alteração" />
                    </div>

                   
                </Form>
            </main>

        </Container>
    )
}