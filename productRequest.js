const response = await axios.get(⁠ http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products/${productid} ⁠, {
            headers: {
                Authorization: ⁠ Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTQ3MDI4LCJpYXQiOjE3MTUxNDY3MjgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjYxZDEwODYwLTFmMDAtNDZlMy05NjYyLWEwZGFiZTY2NGUzYyIsInN1YiI6IjIxMDUyMTA2QGtpaXQuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjYxZDEwODYwLTFmMDAtNDZlMy05NjYyLWEwZGFiZTY2NGUzYyIsImNsaWVudFNlY3JldCI6IkhzVGhDQ2djYmRCVUl3ZHMiLCJvd25lck5hbWUiOiJTaHViaGFtVXBhZGh5YXkiLCJvd25lckVtYWlsIjoiMjEwNTIxMDZAa2lpdC5hYy5pbiIsInJvbGxObyI6IjIxMDUyMTA2In0.GEkuAm0sS17EwYcij9VdaYoU9KeVQpGsAKyAJNB5U6E} ⁠
            }
        });
        res.json(response.data);