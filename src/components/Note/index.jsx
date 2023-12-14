import { Container } from "./styles";
import { Tag } from '../Tag'
import { Stars } from "../Stars";

export function Note({ data, note,...rest }) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            <Stars rating={note?.rating}/>

            <div className="description">
                <p>{data.text}</p>
            </div>
           
            { data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.name} title={tag.name} />)
                    }
                </footer>
            }

        </Container>
    )
}