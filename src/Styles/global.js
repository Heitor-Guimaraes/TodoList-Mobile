export const theme = {
  colors: {
    background: '#F1F5F9',
    primary: '#4F46E5',
    danger: '#EF4444',
    textMain: '#1E293B',
    textSub: '#64748B',
    border: '#CBD5E1',
    priority: {
      Alta: '#EF4444',
      Média: '#F59E0B',
      Baixa: '#10B981',
    }
  }
};

export const priorityOptions = ['Baixa', 'Média', 'Alta'];

export const normalizePriority = (value) => {
  const input = (value || '').toString().trim().toLowerCase();

  if (input === 'alta') return 'Alta';
  if (input === 'media' || input === 'média') return 'Média';
  if (input === 'baixa') return 'Baixa';

  return 'Média';
};