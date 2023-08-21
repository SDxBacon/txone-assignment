import {
  Text,
  Icon,
  Menu,
  MenuList,
  MenuItem,
  TonicProvider,
} from '@tonic-ui/react';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// 主要測試的元件
import AvatarMenuButton from './AvatarMenuButton';

/**
 * Test case 1: with 3 fixed MenuItem
 */
test('with 3 fixed MenuItem', async () => {
  // ARRANGE
  render(
    <TonicProvider>
      <Menu>
        <AvatarMenuButton />
        {/* MenuList - The layout of the menu is fixed. */}
        <MenuList width='max-content'>
          <MenuItem>
            <Icon icon='settings' mr='2x' />
            <Text>Settings</Text>
          </MenuItem>
          <MenuItem>
            <Icon icon='user-team' mr='2x' />
            <Text>Accounts</Text>
          </MenuItem>
          <MenuItem>
            <Icon icon='lock' mr='2x' />
            <Text>Privacy control</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </TonicProvider>,
  );

  // ACT
  await userEvent.click(screen.getByTestId('avatar-menu-button'));

  // ASSERT
  const menuItemElements = screen.getAllByRole('menuitem');
  expect(menuItemElements).toHaveLength(3); // 預期應該要找到 3 個 MenuItem 元件、
  expect(menuItemElements[0]).toHaveTextContent('Settings'); // 預期第一個 MenuItem 元件是 Settings
  expect(menuItemElements[1]).toHaveTextContent('Accounts'); // 預期第二個 MenuItem 元件是 Accounts
  expect(menuItemElements[2]).toHaveTextContent('Privacy control'); // 預期第三個 MenuItem 元件是 Privacy control
});

/**
 * Test case 2: without any MenuItem
 */
test('without any MenuItem', async () => {
  // ARRANGE
  render(
    <TonicProvider>
      <Menu>
        <AvatarMenuButton />
      </Menu>
    </TonicProvider>,
  );

  // ACT
  await userEvent.click(screen.getByTestId('avatar-menu-button'));

  // ASSERT
  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});
