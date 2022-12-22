function mapSpecial({
  id, name, icon, description = 'Описание недоступно',
}) {
  return {
    id, name, icon, description,
  };
}

export function getSpecialFields({ special = [] }) {
  return special.map(mapSpecial);
}
