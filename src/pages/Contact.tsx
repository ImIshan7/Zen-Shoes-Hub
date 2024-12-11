import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { BackgroundDecorations } from '../components/ui/BackgroundDecorations';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export function Contact() {
    return (
        <div className="pt-20">
            <PageHeader
                title="Get in Touch"
                subtitle="We'd love to hear from you"
                backgroundImage="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80"
            />

            <Section
                backgroundImage="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ContactInfo />
                    <ContactForm />
                </div>
                <BackgroundDecorations
                    colors={{
                        first: 'bg-blue-200',
                        second: 'bg-purple-200'
                    }}
                />
            </Section>
        </div>
    );
}