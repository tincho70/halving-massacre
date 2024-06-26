'use client';

// Libraries
import React, { useContext, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Container, Divider, Flex, Heading, Text } from '@lawallet/ui';
import { useFormatter } from '@lawallet/react';
import type { AvailableLanguages } from '@lawallet/utils/types';

// Theme
import { appTheme } from '../../../config/exports';

// Hooks and utils
import { useMassacre } from '../../../hooks/useMassacre';
import { RoundsContext } from '../../../context/RoundsContext';

// New ui-components
import { Tab, TabList, Tabs, TabPanel, TabPanels } from '../components/Tabs';

// Generic components
import { Navbar } from '../components/Navbar';
import Card from '../components/Card';
import Treasury from '../components/TreasuryAnimation';
import { RankingList } from '../components/RankingList';
import { GameTime } from '../components/GameTime';
import { RankingRounds } from '../components/RankingRounds';
import { getTopPlayers } from '../../../lib/utils';

interface PageProps {
  params: {
    lud16: string;
  };
}

export default function Page({ params }: PageProps): JSX.Element {
  // Generics
  const t = useTranslations();
  const locale = useLocale() as AvailableLanguages;

  // Context

  const { rounds } = useContext(RoundsContext);
  const { players, currentPool } = useMassacre();
  const { formatAmount } = useFormatter({ currency: 'SAT', locale });
  const totalPrice = formatAmount(currentPool / 1000);

  // Mocks
  const [nameTab, setNameTab] = useState<string>('global');

  const handleChangeTab = (value: string) => {
    setNameTab(value);
  };

  return (
    <>
      <Navbar />
      <GameTime />
      <Divider y={16} />
      <Flex direction="column" align="center">
        <Heading as="h1">{t('RANKING')}</Heading>
        <Divider y={16} />
        <Container>
          <Card animation={<Treasury />} size="small">
            <Heading as="h2">{totalPrice}</Heading>
            <Text color={appTheme.colors.gray50}>{t('TOTAL_PRIZE')}.</Text>
          </Card>
        </Container>
        <Divider y={16} />
        <Heading align="center" as="h3">
          Top 100
        </Heading>

        <Divider y={16} />
        <Container size="small">
          <Tabs>
            <TabList>
              <Tab active={nameTab === 'global'} onClick={() => handleChangeTab('global')}>
                {t('GLOBAL')}
              </Tab>
              <Tab disabled={rounds.length < 1} active={nameTab === 'rounds'} onClick={() => handleChangeTab('rounds')}>
                {t('ROUNDS')}
              </Tab>
            </TabList>
          </Tabs>
          <TabPanels>
            <TabPanel show={nameTab === 'global'}>
              <Divider y={16} />
              <RankingList players={getTopPlayers(players!, 100)} />
            </TabPanel>
            <TabPanel show={nameTab === 'rounds'}>
              <Divider y={16} />
              <RankingRounds />
              {/* Agregar listado de jugadores massacrados */}
              {/* <RankingList players={players} type="massacre" /> */}
            </TabPanel>
          </TabPanels>
        </Container>
      </Flex>
    </>
  );
}
