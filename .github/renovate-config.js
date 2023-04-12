module.exports = {
    dryRun: false,
    username: 'xstar97',
    gitAuthor: 'xstar97-admin <dev.xstar97@gmail.com>',
    onboarding: false,
    platform: 'github',
    repositories: [
      'xstar97/xstar97.github.io',
    ],
    packageRules: [
      {
        description: 'lockFileMaintenance',
        matchUpdateTypes: [
          'pin',
          'digest',
          'patch',
          'minor',
          'major',
          'lockFileMaintenance',
        ],
        dependencyDashboardApproval: true,
        stabilityDays: 0,
      },
    ],
  };