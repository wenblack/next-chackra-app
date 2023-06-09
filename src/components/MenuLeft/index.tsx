import { HamburgerIcon, AddIcon, EditIcon } from "@chakra-ui/icons";
import { IoMdColorPalette, IoMdLogOut } from 'react-icons/io'
import { IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";

export function MenuLeft() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Menu >
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon boxSize={5} />}
                border='none'
                variant='outline'
                style={{
                    position: 'fixed',
                    zIndex: 1
                }}
                right={{ base: 8, md: 8, lg: 10, sm: 8 }}
            />
            <MenuList
                _dark={{
                    background: 'gray.700'
                }}
            >
                <MenuItem
                    as={'button'}
                    onClick={toggleColorMode}
                    icon={<IoMdColorPalette size={'20'} />}
                    _dark={{
                        background: 'blackAlpha.50',
                        _hover: {
                            color: 'gray.300'
                        },
                        _focus: {
                            background: 'gray.600',
                            color: 'gray.300'
                        },
                        color: 'white'
                    }}
                >
                    Change theme
                </MenuItem>
                <MenuItem
                    as={'a'}
                    icon={<IoMdLogOut size={'20'} />}
                    _dark={{
                        background: 'blackAlpha.50',
                        _hover: {
                            color: 'gray.300'
                        },
                        _focus: {
                            background: 'gray.600',
                            color: 'gray.300'
                        },
                        color: 'white'
                    }}
                    href='/'
                >
                    Log Out
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
