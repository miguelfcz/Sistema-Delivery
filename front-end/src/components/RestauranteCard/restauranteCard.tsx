import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Definindo a interface de Props para o seu Card
export interface RestauranteCardProps {
  id: number;
  nome: string;
  descricao: string;
  urlFoto: string;
  // A função de clique agora recebe o ID para navegação
  onCardClick: (id: number) => void;
}

const RestauranteCard: React.FC<RestauranteCardProps> = ({ id, nome, descricao, urlFoto, onCardClick }) => {
  return (
    // O margin: 1 ajuda a separar os cards dentro do carrossel
    <Card sx={{ maxWidth: 300, minWidth: 250, margin: 1, boxShadow: 3 }}>
      {/* Tornando toda a área de conteúdo clicável */}
      <CardActionArea onClick={() => onCardClick(id)}>
        <CardMedia
          component="img"
          height="140"
          image={urlFoto}
          alt={`Foto do restaurante ${nome}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {nome}
          </Typography>
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
            {descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RestauranteCard;