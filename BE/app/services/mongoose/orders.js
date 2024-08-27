import Orders from '../../api/v1/orders/model.js';

const getAllOrders = async () => {
    const { limit = 10, page = 1, startDate, endDate } = req.query;
    let condition = {};

    if (req.user.role === 'owner') {
        condition = {
            ...condition,
            'historyEvent.organizer': req.user.organizer
        }
    }

    if (startDate && endDate) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0);
        const end = new Date(endDate);
        end.setHours(23, 59, 59);

        condition = {
            ...condition,
            date: {
                $gte: start,
                $lte: end
            }
        }
    }

    try {
        const result = await Orders.find(condition)
            .limit(limit)
            .skip((page - 1) * limit)

        const count = await Orders.countDocuments(condition);
        return {
            data: result,
            pages: Math.ceil(count / limit),
            total: count
        }
    } catch (error) {
        throw error
    }
}


export default getAllOrders