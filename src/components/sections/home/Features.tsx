'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description:
        'Deploy intelligent workflows that scale automatically with 10x faster processing than traditional solutions.',
      badge: 'AI Core',
    },
    {
      icon: Shield,
      title: 'Zero-Trust Security',
      description:
        'Military-grade encryption with SOC2 compliance and real-time threat detection across all endpoints.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Native Mobile SDK',
      description:
        'Cross-platform development kit with React Native and Flutter support for seamless mobile integration.',
      badge: 'Mobile',
    },
    {
      icon: Globe,
      title: 'Edge Computing Network',
      description:
        'Global infrastructure with 99.99% uptime across 50+ regions for ultra-low latency performance.',
      badge: 'Infrastructure',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Intelligence',
      description:
        'Advanced machine learning analytics with predictive insights and automated anomaly detection.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'White-Label Platform',
      description:
        'Complete brand customization with headless architecture and unlimited styling flexibility.',
      badge: 'Branding',
    },
    {
      icon: Code2,
      title: 'GraphQL API Suite',
      description:
        'Modern API-first architecture with comprehensive SDKs, webhooks, and developer sandbox environment.',
      badge: 'Developer',
    },
    {
      icon: Headphones,
      title: 'Enterprise Support',
      description:
        'Dedicated technical account managers with SLA guarantees and priority escalation channels.',
      badge: 'Support',
    },
    {
      icon: Lock,
      title: 'Data Sovereignty',
      description:
        'Complete data ownership with GDPR compliance, regional data residency, and zero vendor lock-in.',
      badge: 'Privacy',
    },
  ];

  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewFeatures = () => {
    window.location.href = '/features';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
            Platform Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade Infrastructure
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built for Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Production-ready platform with enterprise security, global infrastructure, and
            developer-first APIs designed for high-growth tech companies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300 border border-primary/20">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-accent/20 text-accent border-accent/30"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to build with enterprise-grade infrastructure?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Building Now
            </button>
            <button
              onClick={handleViewFeatures}
              className="px-8 py-4 border border-primary/30 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-200 text-primary hover:border-primary/50"
            >
              Explore Technical Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
