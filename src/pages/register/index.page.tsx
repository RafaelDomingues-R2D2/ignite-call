import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Form, Header } from "./styles";
import { ArrowRight } from "phosphor-react";

export default function Register(){
    return (
        <Container>
            <Header>
                <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
                <Text>
                    Precisamos de alguma informações para criar seu perfil! Ah, você pode 
                    editar essa infomações depois.
                </Text>

                <MultiStep size={4} currentStep={1}></MultiStep>
            </Header>
            <Form as="form">
                <label>
                    <Text size="sm">Nome de usuário</Text>
                    <TextInput prefix="ignite.com/" placeholder="seu-usuario" />
                </label>

                <label>
                    <Text size="sm">Nome completo</Text>
                    <TextInput placeholder="Seu nome" />
                </label>

                <Button>
                    Próximo passo
                    <ArrowRight />
                </Button>
            </Form>
        </Container>
    )
}