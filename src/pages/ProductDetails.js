import React from 'react';
import { Box,  CardMedia, Typography, TextField, Button, Paper } from '@mui/material';
import { useLocation } from 'react-router';

export const ProductDetails = () => {
    const {state} =  useLocation();
    console.log(state)
    return (
      <Paper>
        <Box p={4} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
          {/* Ürün resmi */}
          <Box flexBasis="50%">
            <CardMedia
              component="img"
              image={state?.img}
              alt="Pırlanta Yüzük"
              sx={{ maxWidth: '100%', objectFit: 'cover' }}
            />
          </Box>
    
          {/* Ürün bilgileri */}
          <Box flexBasis="30%">
            <Typography variant="h5">{state?.title}</Typography>
            <Typography variant="body2" color="error" sx={{ fontWeight: 'bold', mt: 2 }}>
              %30 İndirimli Sezon Sonu Kampanyası Ürünüdür ve Stoklarla Sınırlıdır.
            </Typography>
            <Typography variant="body1" sx={{ textDecoration: 'line-through', mt: 1 }}>
              11.655 TL
            </Typography>
            <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 'bold', mt: 1 }}>
              {state.price} TL
            </Typography>
    
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Yüzük Ölçüsü</Typography>
            <TextField size="small" variant="outlined" sx={{ width: '100%', mb: 2 }} />
    
            <Typography variant="subtitle1">Yüzük İçi Yazı (∞)</Typography>
            <TextField size="small" variant="outlined" sx={{ width: '100%', mb: 3 }} />
    
            {/* Butonlar */}
            <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
              Hemen Satın Al
            </Button>
            <Button variant="outlined" color="secondary" fullWidth>
              Telefonla Sipariş
            </Button>
          </Box>
        </Box>
      </Paper>  
      );
};

