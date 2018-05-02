describe("groupBy", function () {
    it("groups the source array by a single key", function () {
        var itens = [
            { category: "Search Engines", hits: 5, bytes: 50189 },
            { category: "Content Server", hits: 1, bytes: 17308 },
            { category: "Content Server", hits: 1, bytes: 47412 },
            { category: "Search Engines", hits: 1, bytes: 7601 },
            { category: "Business", hits: 1, bytes: 2847 },
            { category: "Content Server", hits: 1, bytes: 24210 },
            { category: "Internet Services", hits: 1, bytes: 3690 },
            { category: "Search Engines", hits: 6, bytes: 613036 },
            { category: "Search Engines", hits: 1, bytes: 2858 }
        ];

        var groupedItens = [
            {
                key: "Search Engines",
                values: [
                    { category: "Search Engines", hits: 5, bytes: 50189 },
                    { category: "Search Engines", hits: 1, bytes: 7601 },
                    { category: "Search Engines", hits: 6, bytes: 613036 },
                    { category: "Search Engines", hits: 1, bytes: 2858 }
                ]
            },
            {
                key: "Content Server",
                values: [
                    { category: "Content Server", hits: 1, bytes: 17308 },
                    { category: "Content Server", hits: 1, bytes: 47412 },
                    { category: "Content Server", hits: 1, bytes: 24210 }
                ]
            },
            {
                key: "Business",
                values: [
                    { category: "Business", hits: 1, bytes: 2847 }
                ]
            },
            {
                key: "Internet Services",
                values: [
                    { category: "Internet Services", hits: 1, bytes: 3690 }
                ]
            }
        ];

        var groupKey = "category";
        var result = itens.groupBy(groupKey);

        expect(result).toEqual(groupedItens);
    });

    it("groups the source array by an array with one key", function () {
        var itens = [
            { category: "Search Engines", hits: 5, bytes: 50189 },
            { category: "Content Server", hits: 1, bytes: 17308 },
            { category: "Content Server", hits: 1, bytes: 47412 },
            { category: "Search Engines", hits: 1, bytes: 7601 },
            { category: "Business", hits: 1, bytes: 2847 },
            { category: "Content Server", hits: 1, bytes: 24210 },
            { category: "Internet Services", hits: 1, bytes: 3690 },
            { category: "Search Engines", hits: 6, bytes: 613036 },
            { category: "Search Engines", hits: 1, bytes: 2858 }
        ];

        var groupedItens = [
            {
                key: "Search Engines",
                values: [
                    { category: "Search Engines", hits: 5, bytes: 50189 },
                    { category: "Search Engines", hits: 1, bytes: 7601 },
                    { category: "Search Engines", hits: 6, bytes: 613036 },
                    { category: "Search Engines", hits: 1, bytes: 2858 }
                ]
            },
            {
                key: "Content Server",
                values: [
                    { category: "Content Server", hits: 1, bytes: 17308 },
                    { category: "Content Server", hits: 1, bytes: 47412 },
                    { category: "Content Server", hits: 1, bytes: 24210 }
                ]
            },
            {
                key: "Business",
                values: [
                    { category: "Business", hits: 1, bytes: 2847 }
                ]
            },
            {
                key: "Internet Services",
                values: [
                    { category: "Internet Services", hits: 1, bytes: 3690 }
                ]
            }
        ];

        var groupKey = ["category"];
        var result = itens.groupBy(groupKey);

        expect(result).toEqual(groupedItens);
    });

    it("groups the source array by an array with multiples keys", function () {
        var itens = [
            { category: "Search Engines", hits: 5, bytes: 50189 },
            { category: "Content Server", hits: 1, bytes: 17308 },
            { category: "Content Server", hits: 1, bytes: 47412 },
            { category: "Search Engines", hits: 1, bytes: 7601 },
            { category: "Business", hits: 1, bytes: 2847 },
            { category: "Content Server", hits: 1, bytes: 24210 },
            { category: "Internet Services", hits: 1, bytes: 3690 },
            { category: "Search Engines", hits: 6, bytes: 613036 },
            { category: "Search Engines", hits: 1, bytes: 2858 }
        ];

        var groupedItens = [
            {
                key: { category: "Search Engines", hits: 5 },
                values: [
                    { category: "Search Engines", hits: 5, bytes: 50189 }
                ]
            },
            {
                key: { category: "Content Server", hits: 1 },
                values: [
                    { category: "Content Server", hits: 1, bytes: 17308 },
                    { category: "Content Server", hits: 1, bytes: 47412 },
                    { category: "Content Server", hits: 1, bytes: 24210 }
                ]
            },
            {
                key: { category: "Search Engines", hits: 1 },
                values: [
                    { category: "Search Engines", hits: 1, bytes: 7601 },
                    { category: "Search Engines", hits: 1, bytes: 2858 }
                ]
            },
            {
                key: { category: "Business", hits: 1 },
                values: [
                    { category: "Business", hits: 1, bytes: 2847 }
                ]
            },
            {
                key: { category: "Internet Services", hits: 1 },
                values: [
                    { category: "Internet Services", hits: 1, bytes: 3690 }
                ]
            },            
            {
                key: { category: "Search Engines", hits: 6 },
                values: [
                    { category: "Search Engines", hits: 6, bytes: 613036 }
                ]
            }
        ];

        var groupKey = ["category", "hits"];
        var result = itens.groupBy(groupKey);

        console.log(result);
        expect(result).toEqual(groupedItens);
    });
});
