import 'astro/jsx-runtime';

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function notesAndTags(allNotes) {
  const notes = sortedNotes(allNotes);
  const tags = noteTags(notes);
  return { allNotes: notes, allTags: tags };
}

function sortedNotes(allNotes) {
  allNotes = allNotes.sort((a, b) => {
    return new Date(b.data.added).getTime() - new Date(a.data.added).getTime();
  });
  return allNotes;
}

function noteTags(notes) {
  return notes.reduce((allTags, note) => {
    const noteTags = note.data.tags;
    if (noteTags) {
      noteTags.forEach((tag) => {
        if (!allTags[tag]) {
          allTags[tag] = [];
        }
        allTags[tag].push(note);
      });
    }
    return allTags;
  }, {});
}

const makeTitle = (id: string) => {
  const [year, month, day, hour, minute] = id
    .split('-')
    .map((n) => parseInt(n));
  const monthName = monthNames[month - 1];
  const isPM = hour >= 12;
  const hour12 = hour % 12 || 12;
  const minutePadded = minute.toString().padStart(2, '0');
  const period = isPM ? 'pm' : 'am';

  return `${day} ${monthName} ${year}, ${hour12}:${minutePadded} ${period}`;
};

const makeAdded = (id: string) => {
  const [year, month, day, hour, minute] = id.split('-');
  return new Date(`${year}-${month}-${day} ${hour}:${minute}`);
};

export function makeNoteFromNugget(nugget) {
  return {
    ...nugget,
    id: nugget.id,
    collection: 'notes' as const,
    data: {
      ...nugget.data,
      title: makeTitle(nugget.id),
      excerpt: nugget.data.excerpt,
      added: makeAdded(nugget.id),
      updated: makeAdded(nugget.id),
      tags: [],
      type: 'note' as const,
      includeYTResources: true, // TODO: fix
      noComments: false,
    },
  };
}
