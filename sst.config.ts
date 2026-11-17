/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: 'fjtd-dev',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: input?.stage === 'production',
      home: 'aws',
      providers: {
        cloudflare: { package: '@pulumi/cloudflare', version: '6.23.2' },
        aws: { region: 'ap-northeast-1' }
      }
    };
  },
  async run() {
    new sst.aws.Nextjs('Portfolio', {
      openNextVersion: '4.1.5',
      transform: {
        cdn: {
          transform: {
            distribution: (args) => {
              args.priceClass = 'PriceClass_200';
            }
          }
        }
      },
      domain:
        $app.stage === 'production'
          ? {
              name: 'fjtd.dev',
              redirects: ['www.fjtd.dev'],
              dns: sst.cloudflare.dns({ proxy: true })
            }
          : undefined
    });
  }
});
