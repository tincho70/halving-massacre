'use client';

import { Container, Divider, Flex, Heading, Text } from '@lawallet/ui';
import type { AvailableLanguages } from '@lawallet/utils/types';
import { useLocale, useTranslations } from 'next-intl';

import { appTheme } from '@/../config/exports';

import { useMassacre } from '../../hooks/useMassacre';

import { useFormatter } from '@lawallet/react';
import Card from './components/Card';
import Countdown from './components/Countdown';
import Header from './components/Header';
import LastPowerActions from './components/LastPowerActions/LastPowerActions';
import { Navbar } from './components/Navbar';

export default function Page(): JSX.Element {
  const t = useTranslations();
  const { playerCount, currentPool } = useMassacre();
  const locale = useLocale() as AvailableLanguages;

  const { formatAmount } = useFormatter({ currency: 'SAT', locale });
  const totalPrice = formatAmount(currentPool / 1000);

  return (
    <>
      <Navbar />
      {/* <GameTime round={10} block="820.000" time="20" /> */}
      <Divider y={16} />
      <Container>
        <Flex direction="column" align="center">
          <Header />
          <Divider y={24} />
          <Countdown />
        </Flex>

        <Divider y={24} />

        <Flex direction="column" gap={8}>
          <Flex direction="row" gap={8}>
            <Card image="/emotes/crown.png">
              <Heading as="h2">4-7</Heading>
              <Text color={appTheme.colors.gray50}>{t('WINNERS')}.</Text>
            </Card>
            <Card image="/emotes/rocket.png">
              <Heading as="h2">{playerCount || 0}</Heading>
              <Text color={appTheme.colors.gray50}>{t('PARTICIPANTS')}.</Text>
            </Card>
          </Flex>
          <Card image="/emotes/party.png" size="small">
            <Heading as="h2">{totalPrice}</Heading>
            <Text color={appTheme.colors.gray50}>{t('TOTAL_PRIZE')}.</Text>
          </Card>
        </Flex>
      </Container>

      <LastPowerActions />
    </>
  );
}
