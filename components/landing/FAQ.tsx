import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
    return (
        <section id="faq" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">Find answers to common questions about Prism AI</p>
                </div>

                <div className="mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is a computation?</AccordionTrigger>
                            <AccordionContent>
                                Computation is an entity that defines a collection of users and assets that are used in a manifest to define a workload on the platform.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Which cloud platforms do you support?</AccordionTrigger>
                            <AccordionContent>
                                We support Google Cloud Platform, Azure, and private cloud offerings.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Can I integrate with existing systems?</AccordionTrigger>
                            <AccordionContent>
                                Yes, our platform is designed to be highly integrable. We offer APIs and SDKs that allow you to easily integrate with your existing systems and workflows.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Which confidential computing technologies do you use?</AccordionTrigger>
                            <AccordionContent>
                                We support both AMD SEV-SNP and Intel TDX.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>What are the available pricing plans?</AccordionTrigger>
                            <AccordionContent>
                                We offer flexible pricing plans tailored to your needs. Visit our pricing section for detailed information on Trial, Developer, Team, Business, and Enterprise plans.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>How do I upgrade my plan?</AccordionTrigger>
                            <AccordionContent>
                                You can upgrade your plan directly from your billing page. For Enterprise plans, please contact our sales team.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
