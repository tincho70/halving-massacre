import type { ReactNode } from 'react';
import { Button } from '@lawallet/ui';

import { TabStyle } from './style';

interface TabProps {
  children: ReactNode;
  active?: boolean;
  // Valor opcional
  onClick?: () => void;
}

export function Tab(props: TabProps) {
  const { children, active = false } = props;

  return (
    <TabStyle $active={active}>
      <Button size="small" variant="borderless" {...props}>
        {children}
      </Button>
    </TabStyle>
  );
}
