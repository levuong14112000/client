import React from "react";
import { Product } from "../../Model/product";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";


    interface CatalogProps {
        products: Product[];
      }
      const Catalog: React.FC<CatalogProps> = ({ products }) => {
        return (
          <>
            <List>
            <h1>Catalog</h1>
              <ul className="">
                {products.map((product, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar  sx={{ width: 100, height: 100 }} src={`http://localhost:8080/api/file/image/${product.imageUrl}`}></Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                    <h3>{product.name}</h3>
                    <p>Description: {product.description}</p>
                    <p>Unit Price: ${product.unitPrice}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Units In Stock: {product.unitsInStock}</p>
                    <p>Category: {product.categoryName}</p>
                    </ListItemText>
                   
                  </ListItem>
                ))}
              </ul>
            </List> 
          </>
        );
      };
      
      export default Catalog;
  
  
