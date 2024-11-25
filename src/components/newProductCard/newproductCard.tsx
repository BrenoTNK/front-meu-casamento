import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    sale?: number; // Porcentagem de desconto, opcional
    image: string; // URL da imagem
    favorite: boolean;
  };
  onPress: () => void; // Função para abrir detalhes do produto
  onToggleFavorite: (id: number) => void; // Função para adicionar/remover favoritos
}

const NewProductCard: React.FC<ProductCardProps> = ({
  product,
  onPress,
  onToggleFavorite,
}) => {
  const [isFavorite, setIsFavorite] = useState(product.favorite);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(product.id);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      {/* Imagem do Produto */}
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        {/* Nome do Produto */}
        <Text style={styles.name}>{product.name}</Text>
        {/* Preço e desconto */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
          {product.sale && <Text style={styles.sale}>{product.sale}% OFF</Text>}
        </View>
      </View>
      {/* Botão de Favorito */}
      <TouchableOpacity
        onPress={handleToggleFavorite}
        style={styles.favoriteIcon}
      >
        <AntDesign
          name={isFavorite ? "heart" : "hearto"}
          size={24}
          color={isFavorite ? "red" : "gray"}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NewProductCard;
