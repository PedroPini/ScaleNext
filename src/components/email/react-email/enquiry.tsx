import { Html, Head, Body, Container, Heading, Text, Section } from '@react-email/components';
interface UserEnquiryEmailProps {
    message: string;

}
export const UserEnquiryEmail: React.FC<Readonly<UserEnquiryEmailProps>> = ({
    message,
}) => (
    <Html>
        <Head />
        <Body>
            <Container>
                <Heading>New User Enquiry</Heading>
                <Section>
                    <Heading as="h2">Enquiry:</Heading>
                    <Text>{message}</Text>
                </Section>
            </Container>
        </Body>
    </Html>
);
