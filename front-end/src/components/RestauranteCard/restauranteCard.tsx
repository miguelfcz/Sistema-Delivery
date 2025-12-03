import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';

// Definindo a interface de Props para o seu Card
export interface RestauranteCardProps {
  id: number;
  nome: string;
  endereco: string | null;
  descricao: string | null;
  capaUrl: string | null;
  // A função de clique agora recebe o ID para navegação
  onCardClick: (id: number) => void;
}

const RestauranteCard: React.FC<RestauranteCardProps> = ({ id, nome, descricao, endereco , capaUrl, onCardClick }) => {
  return (
    // O margin: 1 ajuda a separar os cards dentro do carrossel
    <Card sx={{ maxWidth: 300, minWidth: 250, margin: 1, boxShadow: 3, height: '92%', 
                        transition: '0.2s',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: '#e7e7e7ff',
                          transform: 'translateY(-8px)',
                          boxShadow: 6,
                        },     
                     }}>
      {/* Tornando toda a área de conteúdo clicável */}
      <CardActionArea onClick={() => onCardClick(id)}>
        <CardMedia
          component="img"
          height="140"
          image={capaUrl || 'https://placehold.co/300x140/eeeeee/cccccc?text=Sem+Imagem'}
          alt={`Foto do restaurante ${nome}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap title={nome}>
            {nome}
          </Typography>

          {endereco && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'text.secondary' }}>
              <LocationOnIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
              <Typography variant="caption" noWrap title={endereco}>
                {endereco}
              </Typography>
            </Box>
          )}

          <Typography 
            variant="body2" 
            color="text.secondary"
            // Limita a descrição a 3 linhas
            sx={{ 
                overflow: 'hidden', 
                textOverflow: 'ellipsis', 
                display: '-webkit-box',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
            }}
          >
            {descricao || 'Sem descrição disponível.'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RestauranteCard;