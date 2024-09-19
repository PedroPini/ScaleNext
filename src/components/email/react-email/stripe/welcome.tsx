import { Html, Head, Body, Container, Heading, Text } from '@react-email/components';

export const StripeWelcome = () => (
    <Html>
        <Head />
        <Body>
            <Container>
                <Heading>Your payment was successful!</Heading>
                <Text>Thank you for your purchase. Your payment has been processed successfully.</Text>
            </Container>
        </Body>
    </Html>
);
