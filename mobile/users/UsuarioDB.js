import * as SecureStore from 'expo-secure-store';

const USUARIOS_STORAGE_KEY = 'usuarios';

// Função para ler os usuários do SecureStore
export const lerUsuarios = async () => {
  try {
    const jsonValue = await SecureStore.getItemAsync(USUARIOS_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Erro ao ler usuários:', error);
    return [];
  }
};

// Função para salvar os usuários no SecureStore
export const salvarUsuarios = async (usuarios) => {
  try {
    const jsonValue = JSON.stringify(usuarios);
    await SecureStore.setItemAsync(USUARIOS_STORAGE_KEY, jsonValue);
    console.log('Usuários salvos com sucesso');
  } catch (error) {
    console.error('Erro ao salvar usuários:', error);
  }
};