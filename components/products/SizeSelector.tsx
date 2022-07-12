import { Box, Button } from '@mui/material';
import React, { FC } from 'react'
import { ISizes } from '../../interfaces/product';

interface Props {
    selectedSize?: ISizes;
    sizes: ISizes[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
    return (
        <Box>
            {
                sizes.map(size => (
                    <Button
                        key={size}
                        size="small"
                        color={selectedSize === size ? 'primary' : 'info'}
                    >
                        {size}
                    </Button>
                ))
            }
        </Box>
    )
}
