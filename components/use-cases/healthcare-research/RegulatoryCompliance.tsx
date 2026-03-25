import { Shield, Globe, FileCheck, Scale } from 'lucide-react';

const regulations = [
	{
		icon: Shield,
		name: 'HIPAA (United States)',
		benefits: [
			'No centralized PHI storage eliminates the need for complex Business Associate Agreements',
			'Only encrypted mathematical gradients transmitted—even if intercepted, no PHI is exposed',
			'Massive reduction in reportable breach risk; no centralized patient database to compromise',
			'Patient identifiers are strictly excluded from model training updates',
		],
	},
	{
		icon: Globe,
		name: 'GDPR (European Union)',
		benefits: [
			'Raw patient data never leaves its jurisdiction of origin—natively solves cross-border transfer restrictions',
			'Data minimization enforced by design; algorithms extract only necessary features locally',
			'Transparent, locally governed models maintain auditable human-in-the-loop for Article 22 compliance',
			'Supports patient right-to-erasure at the local level without recalling centralized data',
		],
	},
	{
		icon: FileCheck,
		name: 'CCPA / CPRA (California)',
		benefits: [
			'Fine-grained, localized access control mechanisms for each dataset',
			'Hospitals maintain absolute control over which datasets are exposed to local training',
			'Patient opt-out requests honored locally without hunting down externally shipped data',
			'Full transparency into how patient data is processed within the secure enclave',
		],
	},
	{
		icon: Scale,
		name: 'Global Frameworks (POPIA, DPDP, etc.)',
		benefits: [
			'Architecture-agnostic compliance—adapts to any jurisdiction’s data sovereignty requirements',
			'Remote attestation provides cryptographic proof of code integrity before any data processing',
			'Immutable audit trails via distributed ledger for clinical trial accountability',
			'Supports IRB and ethics board review with verifiable computation manifests',
		],
	},
];

export function RegulatoryCompliance() {
	return (
		<section className="py-20 bg-muted/30">
			<div className="container px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight mb-4">
						Regulatory Compliance Benefits
					</h2>
					<p className="text-muted-foreground text-lg">
						Prism AI transforms regulatory adherence from a prohibitive barrier
						into a seamlessly automated architectural feature. Compliance is built
						into the cryptographic foundation.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{regulations.map((reg, i) => (
						<div
							key={i}
							className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors bg-card"
						>
							<div className="flex items-center gap-3 mb-4">
								<div className="p-2 bg-primary/10 rounded-lg">
									<reg.icon className="h-5 w-5 text-primary" />
								</div>
								<h3 className="font-bold text-lg">{reg.name}</h3>
							</div>
							<div className="space-y-2">
								{reg.benefits.map((b, j) => (
									<div key={j} className="flex items-start gap-2">
										<span className="text-primary font-bold text-sm mt-0.5">
											&#x2713;
										</span>
										<span className="text-sm text-muted-foreground">
											{b}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
