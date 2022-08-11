import React from "react";
import { FollowToggle } from "../../components/FollowToggle";
import { User } from "../../components/User/User";
import styles from './Card.module.scss';

export const Card = () => {
  
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <FollowToggle
          followersNumber={83}
          followingNumber={4389}
        />
      </div>

      {
        users.map(user => {
          const {
            id,
            title,
            description
          } = user;

          return (
            <React.Fragment key={id}>
              <User
                title={title}
                description={description}
              />
            </React.Fragment>
          )
        })
      }
    </div>
  );
};

const users = [
  {
    id: '5f9e18c1-da07-4c51-8a9a-4ab359c96a77',
    title: 'Satoshi',
    description: 'Meme Kingdom',
  },
  {
    id: 'd813c0ef-8582-44ea-b9f2-fee367679d5c',
    title: 'Sturec5',
    description: 'Disorder is my order.',
  },
  {
    id: '3f01a992-8512-43a7-889e-469ed1139597',
    title: 'CryptoCountries',
    description: 'CryptoCountries is an interactive game that lets anyone buy and own countries on the Ethereum Blockchain.',
  },
  {
    id: '899d1354-af7f-4aa3-a234-cb113608a1d7',
    title: 'Decentraland',
    description: 'I am a Toronto-based photographer specializing in movement and portrait photography.',
  },
  {
    id: 'c90e5130-04e6-419c-aedb-1b9f1e032ee4',
    title: 'KingUrantatata',
    description: '3D Artist',
  }
]