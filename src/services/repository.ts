import { collection } from 'firebase/firestore';
import { db } from './firebase';

export const wishlistRepository = collection(db, 'wishlist');
