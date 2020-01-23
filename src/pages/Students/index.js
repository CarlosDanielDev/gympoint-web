import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '~/services/api';
import HeaderDefault from '~/components/HeaderDefault';
import Title from '~/components/Title';
import { Container, SearchInput } from './styles';
import DefaultButton from '~/components/DefaultButton';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [t] = useTranslation();

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');
      setStudents(response.data);
    }
    loadStudents();
  }, []);
  console.tron.log('students', students);
  return (
    <Container>
      <HeaderDefault>
        <Title>{t('alunos.titulo')}</Title>
        <div>
          <DefaultButton type="button">{t('botoes.adicionar')}</DefaultButton>
          <SearchInput placeholder={t('alunos.placeholders.buscar')} />
        </div>
      </HeaderDefault>
    </Container>
  );
}
