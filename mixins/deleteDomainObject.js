import capitalize from 'capitalize'

export const deleteDomainObject = {
  methods: {
    deleteDomainObject (type, id, callback) {
      const terminology = type === 'category' ? 'collection' : type
      this.$swal({
        title: `Delete ${capitalize(terminology)}`,
        text: `Are you sure you want to delete this ${terminology}?`,
        type: 'warning',
        showCancelButton: true,
        reverseButtons: true,
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return this.$axios.$delete(`/api/${type}/${id}`)
        }
      }).then(result => {
        if (result) {
          this.$notifications.success({
            message: `${capitalize(terminology)} deleted`
          })
          callback()
        }
      })
    }
  }
}
