'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Rocket, Shield, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalTrial = () => {
    router.push('/');
  };
  const handleEnterpriseSales = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Developer',
      description: 'Perfect for indie developers and early-stage startups',
      price: 'Free',
      period: '',
      badge: null,
      icon: <Rocket className="size-6 text-primary" />,
      features: [
        'Up to 5 AI-powered deployments',
        'Core automation templates',
        'Community-driven support',
        '5GB cloud storage',
        'Basic performance analytics',
        'Standard API rate limits',
      ],
      cta: 'Launch Free Account',
      popular: false,
      action: handleStarterPlan,
    },
    {
      name: 'Scale',
      description: 'Built for growing tech teams and scaling applications',
      price: '$89',
      period: '/month',
      badge: 'Most Popular',
      icon: <Zap className="size-6 text-primary" />,
      features: [
        'Unlimited AI deployments',
        'Advanced automation suite',
        'Priority technical support',
        '500GB distributed storage',
        'Real-time performance insights',
        'Custom API integrations',
        'Multi-team collaboration',
        'Advanced security protocols',
      ],
      cta: 'Start 14-Day Trial',
      popular: true,
      action: handleProfessionalTrial,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations requiring custom infrastructure',
      price: 'Custom',
      period: '',
      badge: 'White Glove',
      icon: <Shield className="size-6 text-primary" />,
      features: [
        'Everything in Scale tier',
        'Unlimited cloud resources',
        '24/7 dedicated engineering support',
        'Custom AI model training',
        'Enterprise-grade security',
        '99.99% uptime SLA',
        'Dedicated success manager',
        'On-site implementation',
      ],
      cta: 'Contact Engineering',
      popular: false,
      action: handleEnterpriseSales,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <Clock className="size-3 mr-2" />
            Pricing That Scales
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transparent Pricing for
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Growth Stage
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            From startup MVP to enterprise scale. Pay only for what you use, with no hidden fees or
            vendor lock-in. Upgrade seamlessly as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm border border-primary/20">
              Monthly Billing
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual Billing
              <Badge variant="secondary" className="ml-2 text-xs bg-accent/20">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit border-accent/30">
                    {plan.badge}
                  </Badge>
                )}

                <div className="mb-4 flex justify-center">{plan.icon}</div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Scale' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need Custom Infrastructure?</h3>
          <p className="text-muted-foreground mb-6">
            We build tailored solutions for enterprises with unique technical requirements. Our
            engineering team will design the perfect architecture for your scale.
          </p>
          <Button
            onClick={handleScheduleDemo}
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/5"
          >
            <Rocket className="size-4 mr-2" />
            Schedule Technical Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
