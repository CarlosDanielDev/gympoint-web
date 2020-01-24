import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '~/services/api';
import HeaderDefault from '~/components/HeaderDefault';
import Title from '~/components/Title';
import { Container, SearchInput } from './styles';
import DefaultButton from '~/components/DefaultButton';
import List from '~/pages/_layouts/List';

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

  return (
    <Container>
      <HeaderDefault>
        <Title>{t('alunos.titulo')}</Title>
        <div>
          <DefaultButton type="button">{t('botoes.adicionar')}</DefaultButton>
          <SearchInput placeholder={t('alunos.placeholders.buscar')} />
        </div>
      </HeaderDefault>
      <List>
        <table>
          <thead>
            <tr>
              <th>{t('alunos.table.header.1')}</th>
              <th>{t('alunos.table.header.2')}</th>
              <th>{t('alunos.table.header.3')}</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td className="editar">{t('alunos.table.body.editar')}</td>
                <td className="deletar">{t('alunos.table.body.apagar')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </List>
    </Container>
  );
}
